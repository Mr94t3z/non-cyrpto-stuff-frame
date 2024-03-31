import { Button, Frog } from 'frog'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment this packages to tested on local server
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api/frame',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  imageOptions: {
    /* Other default options */
    fonts: [
      {
        name: 'Montserrat',
        source: 'google',
      },
      {
        name: 'Space Mono',
        source: 'google',
      },
    ],    
  },
})

// Initial Frame
app.frame('/', (c) => {
  return c.res({
    image: '/images/non-crypto-stuff.jpeg',
    intents: [
      <Button action="/getting-started">🌟 Getting Started</Button>,
      <Button.Link href="https://warpcast.com/~/channel/non-crypto-stuff">🔔 Subscribe Channel</Button.Link>,
      // <Button value="chat">💬 Join the Conversation</Button>,
    ]
  })
})


app.frame('/getting-started', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 35,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Farcaster is a sufficiently decentralized social network built on Ethereum. It is a public social network similar to Twitter and Reddit. Users can create profiles, post "casts" and follow others. They own their accounts and relationships with other users and are free to move between different apps.
      </div>
    ),
    intents: [
      <Button action="/learn">📚 Learn</Button>,
      <Button action="/tutorials">💻 Tutorials</Button>,
      <Button action="/documentation">📄 Docs</Button>,
      <Button.Link href="https://docs.farcaster.xyz/">🔥 More</Button.Link>,
    ]
  })
})

// Learn Seciton
app.frame('/learn', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       If you want to learn more, get started by diving into these concepts:
      </div>
    ),
    intents: [
      <Button action="/farcaster-101">1️⃣ Farcaster 101</Button>,
      <Button action="/core-concepts">2️⃣ Core Concepts</Button>,
      <Button action="/architecture">3️⃣ Architecture</Button>,
      <Button action="/getting-started">🙅🏻‍♂️ Cancel</Button>,
    ]
  })
})


app.frame('/farcaster-101', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Farcaster 101 - a walkthrough of the Farcaster protocol in short, 5 minute videos.
      </div>
    ),
    intents: [
      <Button action="/learn">◀️ Back</Button>,
      <Button.Link href="https://www.youtube.com/playlist?list=PL0eq1PLf6eUdm35v_840EGLXkVJDhxhcF">✨ Watch Online</Button.Link>,
    ]
  })
})


app.frame('/core-concepts', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Core Concepts - learn about the building blocks of Farcaster, starting with accounts.
      </div>
    ),
    intents: [
      <Button action="/learn">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/learn/what-is-farcaster/accounts">✨ Read Online</Button.Link>,
    ]
  })
})


app.frame('/architecture', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Architecture - a breakdown of Farcaster's onchain and offchain systems.
      </div>
    ),
    intents: [
      <Button action="/learn">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/learn/architecture/overviews">✨ Read Online</Button.Link>,
    ]
  })
})


// Tutorials Section
app.frame('/tutorials', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Learn how to build frames, which are mini-apps that run inside a Farcaster feed.
      </div>
    ),
    intents: [
      <Button action="/build-your-first-frame">1️⃣ Build your first frame</Button>,
      <Button action="/sign-in-with-farcaster">2️⃣ Sign in with Farcaster</Button>,
      <Button action="/wirte-your-first-app">3️⃣ Write your first app</Button>,
      <Button action="/getting-started">🙅🏻‍♂️ Cancel</Button>,
    ]
  })
})


app.frame('/build-your-first-frame', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Build your first frame - Make mini-apps that run inside Farcaster.
      </div>
    ),
    intents: [
      <Button action="/tutorials">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/developers/guides/frames/poll">✨ Read Online</Button.Link>,
    ]
  })
})


app.frame('/sign-in-with-farcaster', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Sign in with Farcaster - Let users login to your app with their Farcaster account.
      </div>
    ),
    intents: [
      <Button action="/tutorials">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/auth-kit/installation">✨ Read Online</Button.Link>,
    ]
  })
})


app.frame('/wirte-your-first-app', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Write your first app - Publish a "Hello World" message to Farcaster.
      </div>
    ),
    intents: [
      <Button action="/tutorials">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/auth-kit/installation">✨ Read Online</Button.Link>,
    ]
  })
})


// Documentation Section
app.frame('/documentation', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       This is a general category encompassing all written materials, guidelines, and specifications related to Farcaster.
      </div>
    ),
    intents: [
      <Button action="/farcaster-spec">1️⃣ Farcaster Spec</Button>,
      <Button action="/frame-spec">2️⃣ Frame Spec</Button>,
      <Button action="/apis">3️⃣ APIs</Button>,
      <Button action="/getting-started">🙅🏻‍♂️ Cancel</Button>,
    ]
  })
})


app.frame('/farcaster-spec', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Farcaster Spec - Specifications for Farcaster, including its contracts and hubs.
      </div>
    ),
    intents: [
      <Button action="/documentation">◀️ Back</Button>,
      <Button.Link href="https://github.com/farcasterxyz/protocol">✨ Read Online</Button.Link>,
    ]
  })
})


app.frame('/frame-spec', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       Frame Spec - Specifications for writing and rendering frames in Farcaster apps.
      </div>
    ),
    intents: [
      <Button action="/documentation">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/reference/frames/spec">✨ Read Online</Button.Link>,
    ]
  })
})


app.frame('/apis', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          fontFamily: 'Space Mono',
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          lineHeight: 1.4,
          marginTop: 0,
          padding: '0 120px',
          whiteSpace: 'pre-wrap',
        }}
      >
       APIs - Docs for API's and ABI's for onchain and offchain systems.
      </div>
    ),
    intents: [
      <Button action="/documentation">◀️ Back</Button>,
      <Button.Link href="https://docs.farcaster.xyz/reference/">✨ Read Online</Button.Link>,
    ]
  })
})

// Uncomment this line code to tested on local server
devtools(app, { serveStatic });

export const GET = handle(app)
export const POST = handle(app)
