# promo-sync, by [Tincre`.dev`](https://tincre.dev/)

Event tracking for Ad platforms supported by Promo ads. Use in conjunction with the [`promo-button`](https://github.com/Tincre/promo-button), your Google Tag Manager and/or Google Analytics, Facebook Pixel, Meta Conversions API, and [Tincre Promo](https://tincre.dev/promo').

🤯 for your ads on the web, with Google, Meta, and Tincre. 

## Installation

Use your favorite package manager to rock installation of `promo-sync`.

### Yarn
```
yarn add @tincre/promo-sync# -D if you want this as a dev dep
```
### Npm

```
npm install @tincre/promo-sync# --save-dev if you want it as a dev dep
```

### Usage 

To use a Google Tag (Analytics) event simply import it into your framework of choice and fire the function. 

> 🌶️ Typically this is in a `useEffect` hook within the function body if you're a React user.

```jsx 
import { promoEventPageView } from '@tincre/promo-sync';

export default function PageOrComponent() {
  promoEventPageView()  
  return <></>;
}
```

#### Add the Tincre GTag 
Follow the installation method below to install the Tincre Sync Gtag. This works alongside or without a current Google Tag Manager or Analytics installation. This handles Meta ad conversions, as well.

Our tag is **`GTM-57QS65R`**.

##### `<head>`
Into the `<head>` of each page:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://sync.tincre.dev/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57QS65R');</script>
<!-- End Google Tag Manager -->
```
##### `<body>`
And then in the `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://sync.tincre.dev/ns.html?id=GTM-57QS65R"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

That's it! 

#### Alongside a current Gtag installation (custom)
Just call the `gtag` function again, i.e.

```js
gtag('config', 'GTM-57QS65R', {
  'transport_url': 'https://sync.tincre.dev',
  'first_party_collection': true, 
});
```
> See the [Google Tag Manager documentation](https://developers.google.com/tag-platform/tag-manager/server-side/send-data#google_tag_gtagjs) for additional details.

##### Deduplicating Ids

You should deduplicate ids if you are installing alongside a current implementation that you'd like your Promo events to merge with prior setups, rather than add to.

Pass your event below a `transaction_id` value and it'll match up throughout your data from Promo and Google Tag Manager.

> See [this Google Ads answer for more details](https://support.google.com/google-ads/answer/6386790?hl=en).

Fortunately, we already provide a means of handling this seamlessly. Simply use the following function 
to generate an id and instantiate it via the gtag code above.

```js
import { generateEventId } from '@tincre/promo-sync'

const myPromoEventId = generateEventId();
```
> 🌶️ You shouldn't need to do anything if you're just installing the "stock" Tincre Sync setup. This is specifically for those who need further customization and DIY installation. Tincre typically handles this for 
enterprise clients and pro on request.

### Add an event
To use an event simply import it and call the function, e.g. 

```jsx 
import { promoEventPageView } from '@tincre/promo-sync'
import { useEffect } from 'react';

export default function Index({...}) {
    useEffect(() => { // run once on load
        promoEventPageView()
    }, [])
    return <></>
}
```
#### `useEffect` example
```jsx
import { useEffect } from 'react';
import { promoEventPageView } from '@tincre/promo-sync';

export default function PageOrComponent() {
  useEffect(() => {
    promoEventPageView()  
  }, [])
  return <></>;
}
```
## Support 

- Documentation: [tincre.dev/docs](https://tincre.dev/docs)
- Guides and how-tos: [tincre.dev/docs/guides](https://tincre.dev/docs/guides) 
- Reference docs: [tincre.dev/docs/reference](https://tincre.dev/docs/reference)
- Community: [community.tincre.dev](https://community.tincre.dev)

## License 

This code is free to use for your commercial or personal projects. It is open-source 
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license 
directly via [LICENSE](/LICENSE) herein.

## Development 

### Releases 

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to get the job done.

Currently, only @thinkjrs has the ability to release. The following section 
is written for memory.

#### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices. 

> Ensure that tests :white_check_mark: pass during this process prior to
releasing via npm.

##### Test release 

To do a proper release, ensure you're in the base repo directory and run 
`npm publish . --access public --dry-run`.

#### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`. 

:tada: That's it! :tada:
