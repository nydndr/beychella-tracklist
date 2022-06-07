# Beychella, Visualized

All the songs and samples from Beyoncé's Coachella 2018 Headlining Perfomance a.k.a. Beychella, visualized.

![Project Screenshot](/public/screenshot.png)

## Getting Started

In case you wanna run this project locally:

`git clone https://github.com/nydndr/beychella-tracklist.git`

`cd beychella-tracklist`

`npm install`

`npm run dev`

## Toolbox

### Data

All the data used in this project was collected and processed by me. Yes, that means I watched Homecoming multiple times for getting all the timestamps being used, crazy huh?

> Important disclaimer: i'm neither a data analyst or a data scientist, so I pretty much don't know what I was doing when I created this data. You can suggest better structuring and organization.

I've made all the data I've gathered publicly available, feel free to create your own projects with it:

- [Audio List (Songs)](https://docs.google.com/spreadsheets/d/e/2PACX-1vQlR1RU-bL9MNkQF4e9CN9l_el9gM92DGFe3-JDI6vP3nkSQcyGRIwHlUqUwEC-3V6By0StGF6Qo5na/pub?gid=0&single=true&output=csv): contains all the songs sung by Beyoncé during the perfomance.
  - `time_start` and `time_end`, the moment the song starts and ends on the presentation in _h:mm:ss_ format
  - `ownership`, if Beyoncé owns or not the song.
    Options: `owns` they're are hers and part of one of her individual albums, `covers` the original recording doesn't feature hers but she's interpreting it on the show, `features` the original recording contains her and she's perfoming it on the show
  - `name` of the song
  - `album` the original Beyoncé album the song first appeared on
  - `original_owner` if owned by Beyoncé = `null`, if not carries the name of the artist she is featuring with or covering from
  - `original_album` if owned by Beyoncé = `null`, if not carries the name of the album the song first appeared on
- [Audio List (Sample)](): contains all the samples (here's what a sample is, if you don't know) used throughout the perfomance.
  - `time_start`: the moment the sample is first used on the presentation in _h:mm:ss_ format
  - `track`: the songs it is used on
  - `sample`: the name of the song being sampled
  - `artist`: the artist of the song being sampled
  - `original_album`: the album from the owner artist the song first appeared on
  - `year`: the year the original song was released

### Development

- Google Sheets (data collection)
- Next.js Starter (web framework)
- D3.js (javascript library for chart rendering)

### Design

- [Figma file] and [Figjam file]

## Functionalities

- [x] Works with real beychella data (collected by me) for rendering songs using its duration and timestamps for act 1
- [x] Works with real beychella data (collected by me) for rendering samples using its duration and timestamps for act 1
- [ ] Works with real beychella data (collected by me) for rendering songs and samples for the entirety of the show
- [ ] Displays meta information for samples and songs on hover interactions

## Contribution

You can contribute by reporting any error you find to me by creating a pull request or by hitting my dm on twitter: [@dandararchive](https://twitter.com/dandararchive).

Alternatively, in case you don't see any errors and think this is FLAWLESS, you can get this as a poster or as a shirt and support my work :D

## Author

I'm Dandara, a Product Designer by day and everything else creatively speaking, by night.
