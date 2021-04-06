<template>
<header>
    <img class="logo" src="../temp/5d8362cb8c7e2.jpg" alt="logo" style="height: 80px;">
    <nav>
        <ul class="nav_links">
            <li>
            <a href="#">Services</a>
            </li>
            <li>
            <a href="#">Projects</a>
            </li>
            <li>
            <a href="#">About</a>
            </li>
        </ul>
    </nav>
    <a href="#" class="cta">
        <button>Contact</button>
    </a>
    </header>
</template>

<script>
export default {

}
</script>

<style>
li, a, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ecf0f1;
    text-decoration: none;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    cursor: pointer;
}

.nav_links {
    list-style: none;
}

.nav_links li {
    display: inline-block;
    padding: 0px 20px;
}

.nav_links li a {
    transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
    color: #0089a9;
}

button {
    padding: 9px 25px;
    background-color: rgba(0,136,169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

button:hover {
    background-color: rgba(0,136,169, 0.8);
}
</style>