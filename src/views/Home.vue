<template>
  <Wrapper class="home-wrapper">
    <battleaxe-logo />
    <brutalism-title />
    <host-icons />
    <Button-Group style="font-size: 12px;">
      <Button block>See the docs</Button>
      <Button block>See the code</Button>
      <Button block>Report a bug</Button>
      <Button block>Get some help</Button>
    </Button-Group>
    <div class="anno" style="font-size: 12px; margin: 32px auto 40px auto;">
      <span class="centered">Be friends</span>
      <Button-Group label="Adam">
        <Button flat toolbar icon="gmail" icon-size="24px" />
        <Button flat toolbar icon="twitter" icon-size="24px" />
        <Button flat toolbar icon="github-circle" icon-size="24px" />
        <Button flat toolbar icon="youtube" icon-size="24px" />
        <Button flat toolbar icon="facebook" icon-size="24px" />
      </Button-Group>
      <Button-Group label="Tom">
        <Button flat toolbar icon="gmail" icon-size="24px" style="margin-left: 11px;" />
        <Button flat toolbar icon="twitter" icon-size="24px" />
        <Button flat toolbar icon="github-circle" icon-size="24px" />
        <Button flat toolbar icon="youtube" icon-size="24px" />
        <Button flat toolbar icon="facebook" icon-size="24px" />
      </Button-Group>
    </div>

  </Wrapper>
</template>

<script>
export default {
  components: {
    "battleaxe-logo": require('../components/battleaxeLogo.vue').default,
    "brutalism-title": require('../components/brutalismTitle.vue').default,
    "host-icons": require('../components/hostIcons.vue').default
  }
};
</script>


<style>


.home-wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 300px;
  height: 80%;
  min-height: 550px;
}

</style>