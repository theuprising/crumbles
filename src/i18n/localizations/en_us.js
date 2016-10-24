module.exports = {
  // Home/Land
  home: {
    heading: null,
    subHeading: 'Create the ultimate party playlist. Invite your friends to collaborate.<br/>Win a chance to throw the dinner party of a lifetime',
    continueButton: {
      valid: 'Get started.',
      invalid: null
    }
  },

  // Connect
  connect: {
    heading: null,
    subHeading: 'You\'re in. Connect with Spotify to get started.',
    continueButton: {
      valid: 'Connect with Spotify',
      invalid: null
    }
  },

  // Register
  register: {
    heading: 'Register.',
    subHeading: 'We\'ll need some contact info to let you know if you win.<br/>Don\'t worry, we\'ll keep it a secret.',
    continueButton: {
      valid: 'Next',
      invalid: null
    },
    fields: {
      firstName: { placeholder: 'First Name' },
      lastName: { placeholder: 'Last Name' },
      email: { placeholder: 'Email Address' },
      phone: { placeholder: 'Phone Number' },
      age: { placeholder: 'Age', options: null },
      country: { placeholder: 'Country', options: null },
      city: { placeholder: 'City' },
      zip: { placeholder: 'Zip' }
    }
  },

  // Build
  build: {
    heading: 'Time for action.',
    subHeading: 'Start building your ultimate party playlist.',
    continueButton: {
      valid: 'Continue',
      invalid: 'Add 1$ more tracks to continue'
    },
    addButton: 'Add track.',
    fields: {
      title: { placeholder: 'Enter a playlist title' },
      search: { placeholder: 'Search for tracks on Spotify' }
    }
  },

  // Invite
  invite: {
    heading: 'No one parties alone.',
    subHeading: 'Invite your friends to collaborate on your playlist.',
    continueButton: {
      valid: 'Save + Send Invites.',
      invalid: 'Add 1$ more emails to continue'
    },
    addButton: 'Add friend.',
    fields: {
      search: 'Enter an e-mail address.'
    }
  },

  // Finish
  finish: {
    heading: 'You\'re all set.',
    subHeading: 'Winners will be announced on 1$ 2$.<br/>Check your email for updates from us.'
  },

  // Invited
  invited: {
    heading: null,
    subHeading: 'You\'ve been invited by 1$ to the Sonos Playlist Potluck.<br/>Help the host create the ultimate house party playlist<br/>by adding your favorite tracks to 2$',
    continueButton: {
      valid: 'Open Spotify + Add Tracks',
      invalid: null
    }
  },

  // Playlists
  playlists: {
    heading: 'Potluck playlists',
    subHeading: 'Check out all of these great playlists, created for friends by friends',
    continueButton: {
      valid: 'Start your own.',
      invalid: null
    }
  },

  // Nav
  nav: {
    links: {
      playlists: { text: 'Playlists', href: '/playlists' },
      faq: { text: 'Playlists', href: '' },
      website: { text: 'Sonos.com', href: 'https://www.sonos.com' }
    }
  },

  // Footer
  footer: {
    links: {
      about: { text: 'About', href: 'https://www.sonos.com/en-us/about' },
      reviews: { text: 'Reviews', href: 'https://www.sonos.com/en-us/reviews' },
      mediaCenter: { text: 'Media center', href: 'https://www.sonos.com/press' },
      jobs: { text: 'Jobs', href: 'https://www.sonos.com/jobs' },
      dealerStore: { text: 'Dealer store', href: 'https://channel-us.sonos.com' },
      myAccount: { text: 'My account', href: 'https://www.sonos.com/login' },
      contactUs: { text: 'Contact us', href: 'https://www.sonos.com/en-us/contact' },
      giftCards: { text: 'Gift cards', href: 'https://www.sonos.com/en-us/giftcards' }
    }
  },

  email: {
    hostConfirmation: {
      subject: 'Party time. Welcome to Sonos Playlist Potluck.',
      header: {
        browserMessage: { text: 'View this email in a web page', href: 'https://www.sonos.com' }
      },
      main: {
        h1: "You're all set for the chance to win a dream dinner party for 10.",
        h1Second: '',
        body: 'We\'ll be announcing winners in January. Check back then for updates from us.',
        p: '',
        pSecond: '',
        button: {
          html: 'Learn more',
          text: 'Learn more',
          href: 'http://sonos.com'
        }
      }
    },
    invitee: {
      subject: 'No one parties alone: 1$ has invited you to Sonos Playlist Potluck.',
      header: {
        browserMessage: { text: 'View this email in a web page', href: 'https://www.sonos.com' }
      },
      main: {
        h1: "You've been invited by 1$ to participlate in a Sonos Playlist Potluck.",
        h1Second: 'Win a Playlist Potluck dream dinner for ten.',
        body: 'To RSVP, simply add some tracks to the playlist.',
        p: '',
        pSecond: '',
        button: {
          html: 'Add Tracks',
          text: 'Add Tracks',
          href: 'http://sonos.com'
        }
      }
    },
    footer: {
      copyright: 'copyright 2016 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim mi accumsan turpis finibus, quis pellentesque lorem pharetra. Praesent ullamcorper urna molestie enim molestie, at vestibulum sem blandit. Nam lobortis et leo eget sollicitudin. Vestibulum diam ligula, tempor blandit dictum quis, tristique ullamcorper augue. Integer posuere euismod felis vitae gravida.',
      address: '419 State St, Santa Barbara, CA 93101',
      social: {
        twitter: 'https://twitter.com/sonos',
        facebook: 'https://www.facebook.com/sonos',
        pinterest: 'https://www.pinterest.com/sonos/',
        tumblr: 'http://musicmakesithome.com/',
        instagram: 'https://www.instagram.com/sonos/',
        youtube: 'https://www.youtube.com/sonos',
        googlePlus: 'https://plus.google.com/+sonos',
        vine: 'https://vine.co/sonos'
      },
      nav1: {
        text: 'Unsubscribe',
        href: 'http://sonos.com'
      },
      nav2: {
        text: 'Manage Email Preferences',
        href: 'http://sonos.com'
      },
      nav3: {
        text: 'Privacy Policy',
        href: 'http://www.sonos.com/en-us/legal/privacy.html'
      },
      nav4: {
        text: 'User Terms',
        href: 'http://sonos.com'
      }
    }
  }
}
