import { platform, release, arch, cpus } from 'node:os';

console.log ('nombre sist operativo', platform());
console.log ('version sist operativo', release());
console.log ('arquitectura sist operativo', arch());
console.log ('info sist operativo', cpus());