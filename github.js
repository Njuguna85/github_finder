class Github{
    constructor(){
        this.client_id  = '';
        this.client_secret = '';
        this.reposCount = 5;
        this.reposSort = 'created: asc';

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();
        const repos= await repoResponse.json();
        return {
            profile,
            repos
        }
    }
    
}