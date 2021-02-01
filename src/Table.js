import React, { Component } from 'react';
class Tablehad extends Component {
 render() {
    return (
        <html>
            <table class="tab" cellPadding="5px" cellSpacing="0px" border="1">
                <thead>
                <tr>
                    <th>Student HAD</th>
                    <th>Roll no</th>
                    <th>Class</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nidhee</td>
                        <td>378</td>
                        <td>SYIT</td>
                    </tr>
                    <tr>
                        <td>Devika</td>
                        <td>377</td>
                        <td>SYIT</td>
                    </tr>
                </tbody>
            </table>
        </html>
    );
 }
}

const Table = () => {
    return (
        <html>
            <h2>Here is some sample Text</h2>
        </html>
        );
}

export default Tablehad;
export { Table }