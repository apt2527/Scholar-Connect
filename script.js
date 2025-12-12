// Login
 // Demo login: create localStorage.sc_user and redirect to next
    function getQueryParam(name){
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
    }
    function demoSignIn(email){
      const existing = JSON.parse(localStorage.getItem('sc_user') || 'null');
      const user = existing && existing.email===email
        ? existing
        : { name: email.split('@')[0], email, created: Date.now() };
      localStorage.setItem('sc_user', JSON.stringify(user));
    }

    document.getElementById('login-form').addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      if(!email){ alert('Please enter an email'); return; }
      demoSignIn(email);
      const next = getQueryParam('next') || 'quiz.html';
      window.location.href = next;
    });

    // Signup
     function getQueryParam(name){
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
    }
    function demoSignUp(name,email,level,state){
      const user = { name: name||email.split('@')[0], email, level, state, created: Date.now() };
      localStorage.setItem('sc_user', JSON.stringify(user));
    }

    document.getElementById('signup-form').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const level = document.getElementById('level').value;
      const state = document.getElementById('state').value;
      if(!email){ alert('Please enter an email'); return; }
      demoSignUp(name,email,level,state);
      const next = getQueryParam('next') || 'quiz.html';
      // small delay for UX
      window.location.href = next;
    });