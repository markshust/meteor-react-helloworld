LayoutMain = React.createClass({
  propTypes: {
    content: React.PropTypes.any,
    title: React.PropTypes.string
  },
  render() {
    return (
      <div className="layout-main">
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <main>{this.props.content}</main>
        <footer>Footer</footer>
      </div>
    );
  }
});