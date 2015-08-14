import React from 'react';
let styles;

class <%= name %> extends React.Component {
  render() {
    return (
      <div ref={<%= name %>} style={styles.container}>
        <%= name %>
      </div>
    );
  }
}

styles = {
  container: {
    flex: 1,
  },
};

export default <%= name %>;
