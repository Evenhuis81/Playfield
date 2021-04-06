<template>
    <div style="position: relative">
        <input @input="inputChange" />

    </div>
</template>

<script>
export default {
    props: ['index'],
    data() {
        return {
            // input: ""
        }
    },
    methods: {
        inputChange (sd) {
            console.log(sd)
            // this.$emit('input', target.value)
        },
	}
}
</script>

const searchIndex = [
        { 
            key: "clients",
            label: "deelnemers",
            data: [
                {
                    id: 1,
                    description: "Garry Winters"
                },
                {
                    id: 4,
                    description: "Martha Steward"
                },
                {
                    id: 2,
                    description: "John Edwards"
                }
            ]
        },
        {
            key: "customers",
            label: "klanten",
            data: [
                {
                    id: 1,
                    description: "Milaà Devachio"
                },
                {
                    id: 2,
                    description: "Axelandro Michianõgavicho"
                },
                {
                    id: 3,
                    description: "Plumkadovi Ristorinté"
                }
            ]
        },
        {
            key: "users",
            label: "mentors",
            data: [
                {
                    id: 3,
                    description: "Gerard Oosterhof",
                },
                                        {
                    id: 2,
                    description: "Bert Kat",
                },
                                        {
                    id: 1,
                    description: "Egbert de Jong",                        }
            ]
        }
    ],