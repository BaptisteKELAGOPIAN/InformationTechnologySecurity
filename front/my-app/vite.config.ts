import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        https: {
            key: '../../InformationTechnologyScurity2/privkey.pem',
            cert: '../../InformationTechnologyScurity2/fullchain.pem',
            minVersion: 'TLSv1',
        },
      },
	plugins: [sveltekit()]

});
