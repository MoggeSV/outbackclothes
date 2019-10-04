<template>
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ange email">
    <small id="emailHelp" class="form-text text-muted">Vi kommer inte dela din information till någon</small>
  </div>
  <div class="form-group">
    <label for="password">Lösenord</label>
    <input type="password" class="form-control" id="password" placeholder="Ange lösenord">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
    <label class="form-check-label" for="exampleCheck1">Jag godkänner GDPR</label>
  </div>
  <button type="submit" class="btn btn-primary">Logga in</button>
</form>
</template>
