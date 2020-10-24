import React from 'react';
import List from '@material-ui/core/List';

import routesConfig from '../../../../modules/routesConfig';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import VerticalNavGroup from './VerticalNavGroup';
//import CustomizedTabs from  '../../../../modules/auth/tabs';

const Navigation = () => {
  return (
    <div>
       <List>
      {routesConfig.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === 'group' && <VerticalNavGroup item={item} level={0} />}

          {item.type === 'collapse' && (
            <VerticalCollapse item={item} level={0} />
          )}

          {item.type === 'item' && <VerticalItem item={item} level={0} />}
        </React.Fragment>
      ))}
      
    </List>
    </div>
   
  );
};

export default Navigation;
