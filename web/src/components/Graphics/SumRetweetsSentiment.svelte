<script lang="ts">
  import chartjs from "chart.js/auto";
  import Loader from "@components/Loader.svelte";
  import type { PieConfig, SumRetweetsSentiment } from "@model/index";
  import { onMount } from "svelte";
  import { getSumRetweetsSentiment } from "@service/sum_retweets_sentiment";
  import { pieConfiguration } from "@utils/index";
  import { sentimentColor } from "@utils/index";

  let chartCanvas: HTMLCanvasElement;
  let loading = true;

  onMount(async () => {
    let ctx = chartCanvas.getContext("2d");
    if (!ctx) return;

    const data: SumRetweetsSentiment[] = await getSumRetweetsSentiment();
    
    const template: PieConfig = data.reduce(
      (acc: any, { sentiment_type, recount }) => {
        acc.labels.push(sentiment_type);
        acc.values.push(recount);
        acc.color.push(sentimentColor[sentiment_type]);
        acc.bColor = "#0000f"
        return acc;
      },
      {
        labels: [],
        values: [],
        color: [],
        bColor : '',
      }
      );
      
    const config = pieConfiguration(template);
    new chartjs(ctx, config);
    loading = false;
  });
</script>

<section>
  {#if loading}
    <Loader />
  {/if}
  <div class="canvas-container">
    <canvas bind:this={chartCanvas} id="myChart" />
  </div>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore vel rem
      sint, libero similique laudantium perspiciatis praesentium nam
      consequuntur eos dicta.
    </p>
  </div>
</section>

<style>
  section {
    border: 2px solid black;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 12px 14px 0 rgb(246, 105, 19, 0.52);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
  }
  p {
    vertical-align: middle;
  }
  .canvas-container {
    width: 60%;
    height: 60%;
  }
</style>
