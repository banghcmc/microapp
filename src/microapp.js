import { declareChildApplication, start } from 'single-spa';
import { loadEmberApp } from 'single-spa-ember';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
declareChildApplication('angularjs', () => import('./angularjs/angularjs.app.js'), pathPrefix('/angularjs'));
declareChildApplication('angular', () => import('./angular/angular.app.js'), pathPrefix('/angular'));
declareChildApplication('react', () => import('./react/react.app.js'), pathPrefix('/react'));
declareChildApplication('vue', () => import('src/vue/vue.app.js'), pathPrefix('/vue'));
declareChildApplication('ember', () => loadEmberApp("ember-app", '/build/ember-app/assets/ember-app.js', '/build/ember-app/assets/vendor.js'), pathPrefix('/ember'));
// declareChildApplication('svelte', () => import('src/svelte/svelte.app.js'), pathPrefix('/svelte'));
// declareChildApplication('preact', () => import('src/preact/preact.app.js'), pathPrefix('/preact'));
// declareChildApplication('iframe-vanilla-js', () => import('src/vanillajs/vanilla.app.js'), pathPrefix('/vanilla'));
// declareChildApplication('inferno', () => import('src/inferno/inferno.app.js'), pathPrefix('/inferno'));
// declareChildApplication('cyclejs', () => import('src/cyclejs/cycle.app.js'), pathPrefix('/cycle'));

start();

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
