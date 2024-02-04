import React ,{useState} from 'react';
import { Tree } from 'react-arborist';
import { data, idAccessor } from './data';
import './tree.css'
import Node from './node.jsx';
const TreeView = () => {
    
  
    return (
      <Tree
        initialData={data}
        idAccessor={idAccessor}
        openByDefault={false}>
{Node}
        </Tree>
        
      
    );
  };
  
  export default TreeView;