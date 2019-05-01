import React from 'react'
import '../../resources/css/uui-all.css'
import logo from "../../resources/images/ic_logo_UUi.svg"
import {Aside} from '../../components'
import style from './css/header.module.css'


class Header extends React.Component {

    constructor(props){
        super(props)
        this.state={
            asideIsOpened:false
        }
    }

  openAside=()=>{
        this.setState({
            asideIsOpened:!this.state.asideIsOpened
        })
  }

    render() {
        return (
            <React.Fragment>
                <header className={style.header}>
                    <div className="uui-header sidebar-header">


                        <nav>

                            <div className="uui-responsive-header">
                                <div className="responsive-header">
                                    <div onClick={this.openAside} className="responsive-toggle-box">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="responsive-hide-menu">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <a href="#" className="responsive-brand-logo">
                                        <span className="arrow fa fa-angle-left"></span>
                                        <span className="logo">
<img src="images/ic_logo_UUi.svg" alt=""/>
</span>
                                        <span className="title">Travel Agency</span>
                                    </a>
                                </div>

                                <div className="responsive-menu">
                                    <div className="menu-wrapper">
                                        <div className="menu-scroll">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={this.openAside} className="uui-toggle-box">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#" className="brand-logo">
<span className="logo">
<img src={logo} alt=""/>
</span>
                                Travel Agency
                            </a>
                        </nav>
                    </div>
                </header>
                {this.state.asideIsOpened?<Aside/>:null}
            </React.Fragment>
        )

    }
}

export default Header