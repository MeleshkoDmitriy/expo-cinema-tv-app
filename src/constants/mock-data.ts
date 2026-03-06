import { TMovie } from "@/types";

interface mockRokuDataProps {
  movies: TMovie[];
  series: TMovie[];
  shorts: TMovie[];
}

export const mockRokuData: mockRokuDataProps = {
  movies: [
    {
      id: 'shortform-b2500d7849ec949799cb1d5d0155c6f1eba3308a',
      title: 'BrightScript debug protocol',
      description:
        'This video demonstrates the Roku Remote Debugger, and it shows how the BrightScript network debug protocol could be used in an integration with an IDE such as Visual Studio Code.',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-b2500d7849ec949799cb1d5d0155c6f1eba3308a_1/images/roku-brightscript-network-debug-protocol.jpg',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/roku-brightscript-debug-protocol.mp4',
      duration: 713,
      release_date: '2020-01-20',
      genres: ['educational'],
      tags: ['demo'],
    },
    {
      id: 'shortform-4374be10035077242dde8b7fe272e509ad6e563a',
      title: 'Automated channel testing',
      description:
        'Video that demonstrates the Roku automated channel testing software. It provides a brief overview of the technology stack, and it shows how both the Roku WebDriver and Robot Framework Library can be used for state-driven channel UI automation testing.',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-4374be10035077242dde8b7fe272e509ad6e563a_1/images/basicTestReport.jpg',
      },
      video_url:
        'https://ovp-selector.sr.roku.com/v1/f73763a9-8105-4b78-90e0-381ea0d0128b?format=hls',
      duration: 713,
      release_date: '2020-01-20',
      genres: ['educational'],
      tags: ['demo'],
    },
    {
      id: 'shortform-a59a8c9b7140da32b98cb91fe415a2e3e7dc0660',
      title: 'Managing user access',
      description:
        "Video demonstrating how a developer can use the Developer Dashboard's user access management feature to give team members the authority to take administrative actions, which are appropriate for their respective organizational roles",
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-a59a8c9b7140da32b98cb91fe415a2e3e7dc0660_1/images/userManagementAccess.jpg',
      },
      video_url:
        'https://ovp-selector.sr.roku.com/v1/0c18bf4e-b295-437c-badb-3a171a1b52aa?format=hls',
      duration: 576,
      release_date: '2020-01-20',
      genres: ['educational'],
      tags: ['demo'],
    },
  ],
  series: [
    {
      id: 'shortform-2f0155ecdcc96789596c0fc77f06b45ca0df15a4',
      title: 'How to listen to music',
      description: 'Stream music on your Roku device',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-2f0155ecdcc96789596c0fc77f06b45ca0df15a4_3/images/HowToListenToMusic.jpg',
      },
      video_url:
        'https://d1n7kckvd41xqg.cloudfront.net/61f6f859d30743378290300e99f2f53a/ac885a2fea4d4cbeafb279b33e8ba342/21b582aed3134cd4ad03dc646e04282d/index.m3u8',
      duration: 187,
      release_date: '2020-01-02',
      genres: ['educational'],
      tags: ['tips'],
    },
    {
      id: 'shortform-dc61d89665cf8a5c363925e7fcb4e382fa90f1f9',
      title: 'Best speaker placement',
      description: 'Find the best placement of your Roku audio devices',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-dc61d89665cf8a5c363925e7fcb4e382fa90f1f9_3/images/Best_Speaker_Placement.jpg',
      },
      video_url:
        'https://d1n7kckvd41xqg.cloudfront.net/62405a3b6d304bd180626636854f7acd/ac885a2fea4d4cbeafb279b33e8ba342/21b582aed3134cd4ad03dc646e04282d/index.m3u8',
      duration: 134,
      release_date: '2020-01-02',
      genres: ['educational'],
      tags: ['tips'],
    },
    {
      id: 'shortform-cb6dc73fb84bf7f0d35b99b83217f2dbc9bc08d5',
      title: 'Guest Mode',
      description: 'Let your guests stream with their own accounts',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-cb6dc73fb84bf7f0d35b99b83217f2dbc9bc08d5_1/images/GUEST_MODE.jpg',
      },
      video_url:
        'https://d1n7kckvd41xqg.cloudfront.net/aed3cf8c357f4ef8b8e267a30ac8f25a/ac885a2fea4d4cbeafb279b33e8ba342/21b582aed3134cd4ad03dc646e04282d/index.m3u8',
      duration: 15,
      release_date: '2019-12-03',
      genres: ['educational'],
      tags: ['tips'],
    },
    {
      id: 'shortform-6f2088297f82e02e74e07341fd404750b56e2fbb',
      title: 'Private Listening',
      description: 'See the benefits of the Private Listening',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-6f2088297f82e02e74e07341fd404750b56e2fbb_2/images/ROKU_PRIVATE_LISTENING_012219.jpg',
      },
      video_url:
        'https://d1n7kckvd41xqg.cloudfront.net/f137dd3848ba4bf3b70bb00b90b0eaf7/ac885a2fea4d4cbeafb279b33e8ba342/21b582aed3134cd4ad03dc646e04282d/index.m3u8',
      duration: 30,
      release_date: '2019-10-15',
      genres: ['educational'],
      tags: ['tips'],
    },
    {
      id: 'rsg_unit1_intro',
      title: 'Introduction to the course',
      description:
        'Watch the introduction to the "SceneGraph: Build a Channel" development course. This video outlines the course syllabus.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/video1-intro-course-v2.png',
      },
      video_url: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit1-intro-v3.mp4',
      duration: 178,
      release_date: '2020-05-07',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'rsg-unit2-developerSetup',
      title: 'Development setup',
      description:
        "Start developing for the Roku platform. This lesson explains the first steps, which includes creating the required user and developer accounts and enabling your test Roku device for development. Once you're done, you can sideload Roku's Hello World channel and view its output in the debug console.",
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit2-developerSetup-v4.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit2-developerSetup-v4.mp4',
      duration: 431,
      release_date: '2020-05-07',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video3-scenegraph-overview',
      title: 'Core concepts',
      description:
        "Review key concepts for developing on the Roku platform. This lesson explains the basic design principles and key concepts of Roku development, provide an overview of Roku's development platform, and review the contents and structure of Roku channels. You'll learn about: SceneGraph and BrightScript, the different types of components you can use to build your channel UI, and many other topics.",
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit3-core-concepts.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit3-sgoverview-v3.mp4',
      duration: 765,
      release_date: '2020-05-07',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'rsg-unit4-contentFeed',
      title: 'Creating the content feed',
      description:
        'Learn how the content feed is used to load and organize content in the channel. This lesson explains how the ContentNode maps metadata in your content feed to components in your channel UI, and it provides a few tips for creating your own feed.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit4-content-feed.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit4-contentFeed-v3.mp4',
      duration: 280,
      release_date: '2020-07-18',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video5-grid-screen',
      title: 'Creating a Grid Screen',
      description:
        'Build a grid screen that displays rows of content. This lesson describes how to create a basic channel that gets the videos from a content feed and displays them in a grid. It explains how to create SceneGraph components, set their attributes, and create their interfaces.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit5-gridScreen.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit5-gridscreen-v4.mp4',
      duration: 1899,
      release_date: '2020-05-07',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video6-video-player',
      title: 'Adding the Video Player',
      description: 'Add a video player to launch content into playback.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit6-videoPlayer-v2a.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit6-videoplayer-v3.mp4',
      duration: 819,
      release_date: '2020-05-13',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video7-debugger',
      title: 'Debugging channels',
      description:
        'Debug Roku channels using the debug console. This lesson teaches you how to access the debug console via Telnet and the Roku Eclipse Plug-in and use the different debug ports.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit7-debugging.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit7-debugger-v3.mp4',
      duration: 381,
      release_date: '2020-05-13',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video8-detailsScreen',
      title: 'Creating a Details Screen',
      description:
        "Build a details screen that provides more information about the content selected in the GridScreen, including the item's release date, rating, genre, cast, and detailed description. This lesson explains how to build a screen using more complex SceneGraph components.",
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit8-detailsScreen.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit8-details-screen-v3.mp4',
      duration: 1251,
      release_date: '2020-07-13',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video9-episodesScreen',
      title: 'Creating an Episodes Screen',
      description:
        'Build an episodes screen that organizes television series into seasons and episodes. The left side of the screen displays the seasons; the right side of the screen lists the episodes in the selected season.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit9-episodesScreen.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit9-episodePicker-v3.mp4',
      duration: 2188,
      release_date: '2020-05-29',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video10-videoAds',
      title: 'Displaying Video Ads',
      description:
        'Monetize content on the Roku platform through video ads. This lesson explains how to implement the Roku Advertising Framework (RAF) in order to seamlessly insert video ads into content.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit10-video-ads.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit10-video-ads-part3.mp4',
      duration: 1380,
      release_date: '2020-06-20',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video11-subscriptions',
      title: 'Offering Subscriptions',
      description:
        'Monetize content on your channel by offering subscriptions, directly on-device, through Roku Pay. This lesson explains how to get started with Roku Pay, including how to create a channel, in-channel products, and test users.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit11-rpay-subscriptions.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit11-subscriptions-v3.mp4',
      duration: 1561,
      release_date: '2020-06-27',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video12-deep-linking-part1',
      title: 'Deep Linking (part 1)',
      description:
        'Implement deep linking to get users to content as fast as possible.',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking-v3-part1.mp4',
      duration: 2481,
      release_date: '2020-07-04',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video12-deep-linking-part2',
      title: 'Deep Linking (part 2)',
      description:
        'Implement deep linking to get users to content as fast as possible. Program your channel application to accept and process deep links upon being launched and while it is already running. Configure the playback experiences required for the content types in your feed. ',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking.png',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking-v3-part2.mp4',
      duration: 1567,
      release_date: '2020-07-04',
      genres: ['educational'],
      tags: ['RSG'],
    },
    {
      id: 'video13-certification-testing',
      title: 'Certification Testing',
      description:
        "Prepare your channel to be published to the Roku channel store. This lesson explains how to test your channel's design and performance and verify that it meets all of Roku's certification criteria using Roku's test automation software and automated testing tools.",
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/rsg-unit13-cert-testing.jpg',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/rsg-unit13-cert-testing-v3.mp4',
      duration: 848,
      release_date: '2020-07-16',
      genres: ['educational'],
      tags: ['RSG'],
    },
  ],
  shorts: [
    {
      id: 'shortform-roku-streaming-overview',
      title: 'Streaming overview',
      description:
        'Learn how streaming works on the Roku platform. This video explains how content is delivered from a content delivery network (CDN) to a Roku device via a content feed',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/streaming-overview.jpg',
      },
      video_url:
        'https://image.roku.com/ZHZscHItMTc2/roku-streaming-overview-v3.mp4',
      duration: 100,
      release_date: '2020-01-15',
      genres: ['educational'],
      tags: ['getting-started'],
    },
    {
      id: 'shortform-roku-development-overview',
      title: 'Roku Development Overview',
      description:
        "Learn how Roku's rapidly growing user base makes developing for the Roku platform a viable opportunity. See how developing for the Roku platform is free and easy. There's no cost to enroll in the Roku developer program, develop channels, or publish them to the Roku Channel Store, which is Roku's app marketplace.",
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/roku-overview.jpg',
      },
      video_url: 'https://image.roku.com/ZHZscHItMTc2/roku-overview.mp4',
      duration: 248,
      release_date: '2020-01-15',
      genres: ['educational'],
      tags: ['getting-started'],
    },
    {
      id: 'shortform-a893e770b636f6459dcf027fe361cd49d7ac44c2',
      title: 'Enabling Developer Mode',
      description: 'Steps for enabling Developer Mode on a Roku device',
      image_url: {
        uri: 'https://image.roku.com/ZHZscHItMTc2/enable-developer-mode-v1b.png',
      },
      video_url:
        'https://ovp-selector.sr.roku.com/v1/12cdcf33-58e7-46a6-bbbf-cbb5c5fec500?format=dash',
      duration: 120,
      release_date: '2020-01-17',
      genres: ['educational'],
      tags: ['getting-started'],
    },
    {
      id: 'shortform-4be9d883d51ca3161c780d261c3e1ef480e7e56d',
      title: 'Voice Features',
      description:
        'Video highlighting Direct to Play and Enhanced Voice Control features',
      image_url: {
        uri: 'https://d6hm6c1vbpfva.cloudfront.net/shortform-4be9d883d51ca3161c780d261c3e1ef480e7e56d_2/images/VoiceFeatures.jpg',
      },
      video_url: 'https://image.roku.com/ZHZscHItMTc2/roku-voice-demo-v4.mp4',
      duration: 98,
      release_date: '2020-01-17',
      genres: ['educational'],
      tags: ['feature'],
    },
  ],
};
