import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { durationToString } from "./utils/durationToString";

export default function Home() {
  const songChartRef = useRef();

  const [loading, setLoading] = useState(true);
  const [songData, setSongData] = useState();
  const [sampleData, setSampleData] = useState();

  const albumColors = [
    "#A5AA99",
    "#FFA600",
    "#FF7C43",
    "#F95D6A",
    "#D45087",
    "#A05195",
    "#665191",
    "#2F4B7C",
    "#003F5C",
  ];

  const albums = [
    null,
    "HOMECOMING",
    "LEMONADE",
    "BEYONCÉ",
    "4",
    "I Am... Sasha Fierce",
    "B Day",
    "Speak My Mind",
    "Dangerously In Love",
  ];

  const fetchSongData = async () => {
    setSongData(
      await d3.csv(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlR1RU-bL9MNkQF4e9CN9l_el9gM92DGFe3-JDI6vP3nkSQcyGRIwHlUqUwEC-3V6By0StGF6Qo5na/pub?gid=0&single=true&output=csv",
        (d) => {
          return {
            songTitle: d.name,
            start: d.time_start,
            startSeconds: durationToString(d.time_start),
            end: d.time_end,
            endSeconds: durationToString(d.time_end),
            album: d.album ? d.album : null,
          };
        }
      )
    );
  };

  const fetchSampleData = async () => {
    setSampleData(
      await d3.csv(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlR1RU-bL9MNkQF4e9CN9l_el9gM92DGFe3-JDI6vP3nkSQcyGRIwHlUqUwEC-3V6By0StGF6Qo5na/pub?gid=259972096&single=true&output=csv",
        (d) => {
          return {
            sampleTitle: d.sample,
            start: d.time_start,
            startSeconds: durationToString(d.time_start),
            album: d.original_album,
            artist: d.artist,
            track: d.track,
            year: d.year,
          };
        }
      )
    );
  };

  useEffect(() => {
    fetchSongData();
    fetchSampleData();
  }, []);

  useEffect(() => {
    if (songData && sampleData) {
      setLoading(false);
      drawSongChart();
    }
  }, [songData, sampleData]);

  function drawSongChart() {
    const data = songData.slice(0, 6);

    const duration = d3.max(data.map((data) => data.startSeconds));

    const xScale = d3.scaleLinear().range([0, 200]).domain([0, duration]);

    const colorScale = d3.scaleOrdinal().range(albumColors).domain(albums);

    const songStack = d3.select(songChartRef.current);

    songStack.selectAll("*").remove();

    // Rendering songs
    const songs = songStack
      .selectAll(".songs")
      .data(data)
      .enter()
      .append("div")
      .attr("class", "songs")
      .style("height", `50px`)
      .style("width", (d) => `${xScale(d.endSeconds)}px`)
      .style("background-color", (d) => `${colorScale(d.album)}cc`);

    // Labeling songs
    const label = songs
      .append("div")
      .attr("class", "label")
      .style("border-color", (d) => colorScale(d.album))
      .style("transform", (d, i) =>
        i % 2 == 0 ? `translateY(60px)` : `translateY(-40px)`
      );

    label
      .append("p")
      .text((d) => d.start)
      .style("color", (d) => colorScale(d.album))
      .attr("class", "timeStamp");
    label
      .append("p")
      .text((d) => d.songTitle)
      .attr("class", "songTitle");

    // Rendering samples
    const sample = songStack
      .selectAll(".sample")
      .data(sampleData)
      .enter()
      .append("div")
      .attr("class", "sample")
      .style("width", `5px`)
      .style("transform", (d) => `translateX(${d.startSeconds}px)`)
      .style("height", "60px")
      .style("background-color", "#B63160");
  }
  return (
    <>
      <h1>HOMECOMING</h1>
      <h3>Act 1: Welcome</h3>
      <div className="chartContainer">
        {loading && (
          <div className="loading">
            <div className="box"></div>
          </div>
        )}
        <figure className="songChart" ref={songChartRef}></figure>
      </div>
    </>
  );
}
