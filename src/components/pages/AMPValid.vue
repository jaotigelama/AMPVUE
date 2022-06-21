
<template>
    <amp-youtube
        data-videoid="dQw4w9WgXcQ"
        layout="responsive"
        width="480"
        height="270"
        ></amp-youtube>
        


    <div v-html='`
        <amp-script id="dataFunctions" script="local-script" nodom></amp-script>
        <script id="local-script" type="text/plain" target="amp-script">
            debug.log("Test");
        </script>
    `'></div>

</template>