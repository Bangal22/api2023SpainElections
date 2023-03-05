<script lang="ts">
  import Loader from "@components/Loader.svelte";
  import SentimentCard from "@components/Graphics/SentimentCard.svelte";
  import { getRecountSentiment } from "@service/recount_sentiment";
  import { sentimentTextColor } from "@utils/index";
</script>

<section>
  {#await getRecountSentiment()}
    <Loader />
  {:then data}
    {#each data as { sentiment_type, recount }}
      <SentimentCard
        {recount}
        name={sentiment_type}
        background={'transparent'}
        color = {sentimentTextColor[sentiment_type]}
        width={33.333333}
      />
    {/each}
  {/await}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    gap: 4em;
  }
</style>
