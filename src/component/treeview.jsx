import React, { Children } from 'react';
import data from "../src/component/data.json";

import Tree from 'react-custom-tree'

const TreeViewComponent = () => {
    return (
        <div className="custom-parent">
        <span className="custom-open-icon">
          {this.props.open ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-right" aria-hidden="true"></i>}
        </span>
        {this.props.name}
      
      <div className="tree-sample">
      <Tree
        data={data}
        onChidClick={(child) => console.log(child)}
        parentComponent={data.type}
        childComponent={data.children}
        />
         </div>                   
    </div>
      );

  };

  


export default TreeViewComponent;
