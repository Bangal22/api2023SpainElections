<script lang="ts">
  import Loader from "@components/Loader.svelte";
  import { getTotalTweets } from "@service/index";
  import SentimentCard from "@components/Graphics/SentimentCard.svelte";
</script>

<section>
  {#await getTotalTweets()}
    <Loader />
  {:then {total_tweets}}
      <SentimentCard
        recount={total_tweets}
        name={"Tweets"}
        background={'transparent'}´
        color={'black'}
        width={100}
      />
  {/await}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    gap: 4em;
  }
</style>
