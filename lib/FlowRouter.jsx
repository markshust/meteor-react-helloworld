FlowRouter.route("/", {
  name: "home",
  action() {
    ReactLayout.render(LayoutMain, {
      content: <Home />,
      title: "Home"
    });
  }
});