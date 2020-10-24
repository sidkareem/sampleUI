import React, {useContext} from 'react';
import {onToggleAppDrawer} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import InfoView from '@crema/core/InfoView';
import {Box} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import {Fonts} from '../../../shared/constants/AppEnums';
import Card from '@material-ui/core/Card';
import useStyles from './index.style';
import {AppContext} from '../../index';
import AppSidebar from './AppSidebar';

const AppsContainer = (props) => {
  const dispatch = useDispatch();
  const {isAppDrawerOpen} = useSelector(({common}) => common);
  const {footer, navStyle} = useContext(AppContext);
  const {title, sidebarContent, fullView, children} = props;
  const classes = useStyles({footer, navStyle, fullView});

  return (
    <Box
      pt={{xl: 4}}
      flex={1}
      display='flex'
      className='XXXXX'
      flexDirection='column'>
      <Box
        mb={{xs: 2, lg: 4}}
        mt={{xs: -3, lg: 0}}
        display='flex'
        alignItems='center'>
        <Hidden lgUp>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={() => dispatch(onToggleAppDrawer())}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Hidden>
        <Box
          component='h2'
          color='text.primary'
          fontFamily={Fonts.LIGHT}
          fontSize={{xs: 18, sm: 20, xl: 22}}>
          {title}
        </Box>
      </Box>

      <Box className={classes.appsContainer}>
        {sidebarContent ? (
          <AppSidebar
            isAppDrawerOpen={isAppDrawerOpen}
            footer={footer}
            fullView={fullView}
            navStyle={navStyle}
            sidebarContent={sidebarContent}
          />
        ) : null}

        <Box className={classes.appsMainContent}>
          <Card style={{height: '100%', ...props.cardStyle}}>{children}</Card>
          <InfoView />
        </Box>
      </Box>
    </Box>
  );
};

export default AppsContainer;

AppsContainer.defaultProps = {
  title: '',
};

AppsContainer.prototype = {
  title: PropTypes.string,
};
