import React from 'react';

const Nav = () => {
    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./index.html">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="index.html" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    );
}

export default Nav;