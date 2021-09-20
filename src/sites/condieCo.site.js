export default {
  id: "condieCo",
  themeBase: "hometown",
  title: "Condie & Co",
  subtitle: "Residential, Lifestyle And Rural Property",
  favicon: "https://cdn.eaglesoftware.com.au/condieco/images/favicon.ico",
  logo:
    "https://s3-us-west-2.amazonaws.com/eagleagent-orig/uploads%2F1552610902340-7ypl7hzmp7-1c0c69b764ebbfa0152b1eb5807a67a6%2FCondie+%26+Co_Logo+Blue+HQ.png",
  blockOptions: {
    hometownNav: {
      phone: "0407 034 410"
    },
    hometownFooter: {
      items: [
        {
          type: "text",
          content: {
            heading: "Condie & Co",
            body:
              "Selling and buying real estate can be daunting and choosing the right agent can be hard. Call us on 0407 034 410 for a chat and some helpful advice regarding your property."
          }
        },
        {
          type: "links",
          content: {
            heading: "Quick links",
            items: [
              {
                text: "Browse properties",
                location: "www.google.com",
                icon: null
              },
              {
                text: "Request appraisal",
                location: "www.google.com",
                icon: null
              },
              {
                text: "About the area",
                location: "www.google.com",
                icon: null
              },
              { text: "Testimonials", location: "www.google.com", icon: null },
              { text: "Contact", location: "www.google.com", icon: null }
            ]
          }
        },
        {
          type: "links",
          content: {
            heading: "Calculators",
            items: [
              {
                text: "Borrowing capacity",
                location: "www.google.com",
                icon: null
              },
              {
                text: "Loan repayments",
                location: "www.google.com",
                icon: null
              },
              { text: "Stamp duty", location: "www.google.com", icon: null },
              { text: "Rental yield", location: "www.google.com", icon: null }
            ]
          }
        },
        {
          type: "facebookWidget",
          content: {
            facebookUsername: "condieco"
          }
        }
      ]
    }
  },
  theme: {
    colors: { primary: "#0a3479" }
  },
  templates: {
    main: {
      before: [
        { id: "topBar", options: {} },
        { id: "hometownNav", options: {} }
      ],
      after: [{ id: "hometownFooter", options: {} }]
    }
  },
  pages: [
    {
      slug: "home",
      title: "Home",
      aliases: ["/"],
      children: [],
      template: "main",
      content: [
        {
          id: "carousel",
          options: {
            slick: {
              fade: true
            },
            items: [
              "https://cdn.eaglesoftware.com.au/condieco/images/slide-1.jpg",
              "https://cdn.eaglesoftware.com.au/condieco/images/slide-2.jpg",
              "https://cdn.eaglesoftware.com.au/condieco/images/slide-3.jpg",
              "https://s3-us-west-2.amazonaws.com/cdn.eaglesoftware.com.au/condieco/images/gropu_6712.JPG"
            ]
          }
        },
        {
          id: "hometownCallToAction",
          options: {
            image:
              "https://cdn.eaglesoftware.com.au/condieco/images/Newcastle-32.jpg",
            title: "Stay in touch",
            subtitle: "Sign up today",
            button: {
              text: "Buyer Alerts",
              location: "www.google.com"
            }
          }
        },
        {
          id: "quickLinks",
          options: {
            image:
              "https://cdn.eaglesoftware.com.au/condieco/images/bg-town.jpg",
            items: [
              {
                title: "Request appraisal",
                text:
                  "Want to know what your property is worth? Talk to us about a free appraisal.",
                location: "request-appraisal"
              },
              {
                title: "Facebook",
                text: "Our proven marketing and sales strategy gets results.",
                location: "facebook.com/condieco"
              },
              {
                title: "Testimonials",
                text: "Hear what our clients have to say about us.",
                location: "testimonials"
              }
            ]
          }
        }
      ]
    },
    {
      slug: "buy",
      title: "Buy",
      aliases: [],
      template: "main",
      content: [
        { id: "topBar", options: {} },
        { id: "hometownNav", options: {} }
      ],
      children: [
        {
          id: "residential",
          content: [],
          children: [],
          options: {
            title: "string",
            scope: "residential"
          }
        }
      ]
    }
  ]
};
