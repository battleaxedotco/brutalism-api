<template>
  <Wrapper class="home-wrapper">
    <battleaxe-logo />
    <brutalism-title />
    <host-icons />
    <Button-Group style="font-size: 12px;">
      <Button block goto="https://battleaxe.dev">See the docs</Button>
      <Button block goto="https://github.com/Inventsable/brutalism#-brutalism">See the code</Button>
      <Button block goto="https://github.com/Inventsable/brutalism/issues/new">Report a bug</Button>
      <Button block goto="">Get some help</Button>
    </Button-Group>
    <div class="anno" style="font-size: 12px; margin: 32px auto 40px auto;">
      <span class="centered">Be friends</span>
      <Button-Group label="Adam">
        <Button flat toolbar goto="" icon="gmail" icon-size="24px" />
        <Button flat toolbar goto="https://twitter.com/battleaxedotco" icon="twitter" icon-size="24px" />
        <Button flat toolbar goto="https://github.com/adamplouff" icon="github-circle" icon-size="24px" />
        <Button flat toolbar goto="https://www.youtube.com/channel/UCu1Buv7nvtRTc_kViPCqjQw" icon="youtube" icon-size="24px" />
        <Button flat toolbar goto="http://facebook.com/battleaxedotco" icon="facebook" icon-size="24px" />
      </Button-Group>
      <Button-Group label="Tom">
        <Button 
          flat 
          toolbar 
          goto="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tom@inventsable.cc"
          icon="gmail" icon-size="24px" 
          style="margin-left: 11px;" />
        <Button flat toolbar goto="https://twitter.com/inventsable" icon="twitter" icon-size="24px" />
        <Button flat toolbar goto="https://github.com/Inventsable" icon="github-circle" icon-size="24px" />
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
  height: 570px;
  min-height: 550px;
}
</style>