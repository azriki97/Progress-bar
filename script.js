document.getElementById('update-progress').addEventListener('click', function() {
    const planningDate = new Date(document.getElementById('planning-date').value);
    const finishingDate = new Date(document.getElementById('finishing-date').value);
    const today = new Date();
    const actualProgress = parseInt(document.getElementById('actual-progress').value, 10);
    
    const totalDays = Math.floor((finishingDate - planningDate) / (1000 * 60 * 60 * 24));
    const elapsedDays = Math.floor((today - planningDate) / (1000 * 60 * 60 * 24));
    
    const planningProgress = Math.min(100, Math.max(0, (elapsedDays / totalDays) * 100));
    
    document.getElementById('planning-progress').style.width = planningProgress + '%';
    document.getElementById('actual-progress-bar').style.width = actualProgress + '%';
});
