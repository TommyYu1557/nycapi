
<template>
    <div class="container">
      <h1>{{ id }}</h1>
      <h2>Date of Arrest: {{ crime.arrest_date }}</h2>
      <h3>Offendant Age: {{ crime.age_group }}</h3>
      <h3>Offendant Sex: {{ crime.perp_sex }}</h3>
      <h3>Offendant Race: {{ crime.perp_race }}</h3>
      <p>Offense: {{ crime.ofns_desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        crime: Object,
        arrest_date: Number,
        age_group: Number,
        perp_sex: String,
        perp_race: String,
        ofns_desc: String
    }}
</script>