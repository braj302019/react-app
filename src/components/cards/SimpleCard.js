import React from 'react';

class SimpleCard extends React.Component {
   
    render() {
        const {title, value, subtitle, body} = this.props;
        return (
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                                        SVG
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="fw-extrabold h5"> {title}</h2>
                                        <h3 className="mb-1">{value}</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0"> {title}</h2>
                                        <h3 className="fw-extrabold mb-2">{value}</h3>
                                    </div>
                                    <small className="text-gray-500">
                                        {subtitle}
                                    </small>
                                    <div className="small d-flex mt-1">
                                        <div>{body}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleCard;