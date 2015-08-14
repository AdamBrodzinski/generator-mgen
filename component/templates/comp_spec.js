import React from 'react';
/*global <%= name %>, renderComponent */

describe("<%= name %> Component", function() {
  var defProps, renderWithProps, component, el, $el;

  beforeEach(() => {
    defProps = {
      label: 'Check me',
    };

    renderWithProps = function(props) {
      component = renderComponent(<%= name %>, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should be mounted in DOM", () => {
    renderWithProps(defProps);
    expect($el.length).toEqual(1);
  });
});
