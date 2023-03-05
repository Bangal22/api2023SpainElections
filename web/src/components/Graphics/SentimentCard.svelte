<script>
  export let background;
  export let name;
  export let recount;
  export let color;
  export let width;
</script>

<article style="background-color: {background}; width:{width}%">
  <div style="color:{color}">
    {recount}
    <span>{name}</span>
  </div>
</article>

<style>
  div {
    font-size: 2em;
    font-weight: 700;
    color: #000000;
  }
  span {
    font-size: 0.4em;
  }
  article {
    text-align: center;
    text-transform: capitalize;
    padding: 1em;
    border: 2px solid black;
    /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    box-shadow: 12px 14px 0 rgba(0, 0, 0, 0.201);
    border-radius: 8px;
  }
</style>
