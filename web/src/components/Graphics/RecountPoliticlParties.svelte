<script lang="ts">
  import { onMount } from "svelte";
  import chartjs from "chart.js/auto";
  import Loader from "@components/Loader.svelte";
  import type { BarConfig } from "@model/index";
  import type { PoliticalPartiesTweets } from "@model/index";
  import { getRecountPoliticalPartiesTweets } from "@service/political_parties";
  import { barConfiguration, politicalPartiesColor as ppc } from "@utils/index";

  let chartCanvas: HTMLCanvasElement;
  let loading = true;

  onMount(async () => {
    let ctx = chartCanvas.getContext("2d");
    if (!ctx) return;

    const data: PoliticalPartiesTweets[] =
      await getRecountPoliticalPartiesTweets();
    const template: BarConfig = data.reduce(
      (acc: any, { class_name, recount }) => {
        acc.labels.push(class_name);
        acc.values.push(recount);
        acc.color.push(ppc[class_name].color);
        acc.bColor.push(ppc[class_name].border_color);
        return acc;
      },
      {
        labels: [],
        values: [],
        color: [],
        bColor: [],
      }
    );
    const config = barConfiguration(template);
    new chartjs(ctx, config);
    loading = false;
  });
</script>

<section>
  {#if loading}
    <Loader />
  {/if}
  <canvas bind:this={chartCanvas} id="myChart" />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    border: 2px solid black;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 12px 14px 0 rgb(246, 105, 19, 0.52);
  }
</style>
