# EVRI · ICRA 2027

Website for the proposed workshop **Event-Based Vision for Real-World Robotics: From Perception to Embodied Intelligence**. Built with AstroWind, Astro, and Tailwind CSS.

The initial content follows the workshop proposal. Acceptance, the workshop date, speakers, and submission arrangements are still to be confirmed.

## Development

Requires Node.js >= 22.22.3.

```sh
npm install
npm run dev
npm run build
npm run check
```

## Updating the workshop

- `src/data/workshop.ts`: workshop identity, contact, topics, and organiser names, affiliations, and profile links.
- `src/pages/`: overview, program, speakers, organisers, and call for papers.
- `src/navigation.ts`: header and footer links.
- `src/config.yaml`: site URL and search/social metadata. The template blog is disabled.

To add an organiser photo, place the headshot in `src/assets/images/organisers/`, import it in `src/data/workshop.ts`, and set that organiser’s `photo` field to the import. The card automatically replaces the labelled initials placeholder with an optimised image.

The reusable AstroWind widgets remain available for future additions. Unrelated demo pages have been removed. The template’s social preview image has been cleared pending workshop artwork.

## Attribution

Based on [AstroWind](https://github.com/arthelokyo/astrowind), distributed under the [MIT license](LICENSE.md).
