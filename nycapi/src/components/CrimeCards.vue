<template>
  <div class="container">
    <h2>Date of Arrest: {{ arrest_date }}</h2>
    <h3>Offendant Age: {{ age_group }}</h3>
    <h3>Offendant Sex: {{ perp_sex }}</h3>
    <h3>Offendant Race: {{ perp_race }}</h3>
    <p>Offense: {{ ofns_desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    crime: Object,
    arrest_date: String,
    age_group: String,
    perp_sex: String,
    perp_race: String,
    ofns_desc: String
  }
}
</script>
