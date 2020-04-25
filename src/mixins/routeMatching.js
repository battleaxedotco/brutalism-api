export default {
  data: () => ({
    folds: [
      {
        parent: 'button',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'button-group',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'tooltips',
        children: [
          {
            name: 'positioning',
            open: false,
          },
          {
            name: 'timing',
            open: false,
          }
        ]
      },
      {
        parent: 'input-scroll',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'input',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'textarea',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'toggle',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      },
      {
        parent: 'dropdown',
        children: [
          {
            name: 'styles',
            open: false,
          },
          {
            name: 'props',
            open: false,
          },
          {
            name: 'events',
            open: false,
          }
        ]
      }
    ]
  }),
  methods: {
    // All code below this line is just for dynamic route matching on browser version of panel.
    getFoldData(parent, child) {
      let target = this.folds.find(item => {
        return item.parent == parent;
      }).children.find(item => {
        return item.name == child;
      })
      return target
    },
    checkRouterParams() {
      if (this.$route.params && this.$route.params.parent && this.$route.params.child) {
        let target = this.getFoldData(this.$route.params.parent, this.$route.params.child);
        if (target) target.open = true;
      }
    }
  },
  mounted() {
    this.checkRouterParams();
  },
  computed: {
    routePath() {
      return this.$route.path;
    }
  },
  watch: {
    routePath() {
      this.checkRouterParams();
    }
  }
}