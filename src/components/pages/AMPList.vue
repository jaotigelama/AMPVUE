
<template>
    <amp-list
    id="amp-list"
    width="auto"
    height="100"
    layout="fixed-height"
    src="amp-script:dataFunctions.getRemoteData"
    >
    <template type="amp-mustache">
        <div v-html='`{{name}}`'></div>
    </template>
    </amp-list>

    <amp-script id="dataFunctions" script="local-script" nodom></amp-script>

    <div v-html='`

    <script id="local-script" type="text/plain" target="amp-script">
    function getRemoteData() {
        return fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({query: "{countries{name}}"})
        })
        .then(r => r.json())
        .then(data => { 
            console.log("data returned:", data);
            var newData = {items: data.data.countries};
            console.log("Transformed data:", newData);
            return newData; 
            });
        }
    exportFunction("getRemoteData", getRemoteData);
    </script>
    `'></div>

</template>