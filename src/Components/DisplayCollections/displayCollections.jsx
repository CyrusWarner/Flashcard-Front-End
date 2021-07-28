import React from 'react';

const DisplayCollection = (props) => {
    console.log(props.allCollections)
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr></tr>
                    <tr>
                        <th>All Available Collections</th>
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        props.allCollections.map((collection) => {
                            return(
                                <React.Fragment key={collection.id}>
                                <tr>
                                    <td>{collection.name}</td>
                                </tr>
                                </React.Fragment>
                            )
                        })
                    }
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}
 
export default DisplayCollection;