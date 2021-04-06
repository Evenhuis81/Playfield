<template>

    <div id="montage-wrap">

        <div class="montage-block">
            <span id="block1"></span>
            <div class="thumb_content">
                <h1>Sample Title</h1>
                <p>This is some sample title. yay for text.</p>
            </div>

        </div>

    </div><!-- montage wrap -->

</template>

<script>
export default {
    //
}
</script>

<style>

#montage-wrap {
    width: 980px;
    height: 240px;
}
.montage-block {
    width: 240px;
    height: 240px;
    float: left;
    display: block;
    overflow: hidden;
    position: relative;
    /* margin: 0 0px 0 0; */
    background: white;
    border: 1px solid black;
}
#block1 {
    width: 240px;
    height: 240px;
    position: absolute;
    display: block;
    top: 0;
    background: url("5d8362cb8c7e2.jpg") no-repeat;
    transition: top .3s ease-in-out;
}
.montage-block:hover #block1 {
    top: -150px;
}
.thumb_content {}


</style>
