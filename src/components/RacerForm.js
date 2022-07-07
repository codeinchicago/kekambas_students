import React from 'react';

const RacerForm = props => {
    return (
        <form className='my-3' onSubmit={props.handleFormSubmit}>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <input type='text' className='form-control' name='season' placeholder='Season' />
                </div>
                <div className='col-12 col-md-6'>
                    <input type='text' className='form-control' name='round' placeholder='Round' />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <input type="submit" className="btn btn-primary w-100" />
                </div>
            </div>
        </form>
    )
}

export default RacerForm;