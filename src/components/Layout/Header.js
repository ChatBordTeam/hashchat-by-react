import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

import ToggleFullscreen from '../Common/ToggleFullscreen';
import HeaderRun from './Header.run'

class Header extends Component {

    componentDidMount() {
        HeaderRun();
    }

    toggleUserblock = e => {
        e.preventDefault();
        this.props.actions.toggleSetting('showUserBlock');
    }

    toggleOffsidebar = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('offsidebarOpen');
    }

    toggleCollapsed = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('isCollapsed');
        this.resize()
    }

    toggleAside = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('asideToggled');
    }

    resize () {
        // all IE friendly dispatchEvent
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
        // modern dispatchEvent way
        // window.dispatchEvent(new Event('resize'));
    }

    render() {
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */ }
                <nav className="navbar topnavbar">
                    { /* START Left navbar */ }
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                            <a href="" className="nav-link d-none d-md-block d-lg-block d-xl-block" onClick={ this.toggleCollapsed }>
                                <em className="fas fa-bars"></em>
                            </a>
                            { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
                            <a href=""  className="nav-link sidebar-toggle d-md-none" onClick={ this.toggleAside }>
                                <em className="fas fa-bars"></em>
                            </a>
                        </li>
                    </ul>
                    { /* END Left navbar */ }
                    { /* START Right Navbar */ }
                    <ul className="navbar-nav flex-row">
                        { /* Search icon */ }
                        <li className="nav-item">
                            <a className="nav-link" href="" data-search-open="">
                                <em className="icon-magnifier"></em>
                            </a>
                        </li>
                    </ul>
                    { /* END Right Navbar */ }

                    { /* START Search form */ }
                    <form className="navbar-form" role="search" action="search.html">
                       <div className="form-group">
                          <input className="form-control" type="text" placeholder="해쉬태그를 입력하세요."/>
                          <div className="fa fa-times navbar-form-close" data-search-dismiss=""></div>
                       </div>
                       <button className="d-none" type="submit">Submit</button>
                    </form>
                    { /* END Search form */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
            );
    }

}

Header.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object
};

const mapStateToProps = state => ({ settings: state.settings })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);