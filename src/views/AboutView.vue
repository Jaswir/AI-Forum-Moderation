<template>
    <div class="p-8 md:p-12">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-semibold mb-4">Meet the Team</h1>
            <p class="text-xl">Get to know the amazing individuals behind our company</p>
        </div>

        <!-- First Row -->
        <div class="flex flex-wrap -m-4 mb-8">
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-red-400">
                    <h2 class="text-2xl font-semibold mb-2">Jaswir Raghoe</h2>
                    <p class="text-lg">Tech Lead, Front end and AI Developer</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-blue-400">
                    <h2 class="text-2xl font-semibold mb-2">Muhammed Bilal</h2>
                    <p class="text-lg">Backend Developer</p>
                </div>
            </div>
        </div>

        <!-- Second Row -->
        <div class="flex flex-wrap -m-4 mb-8">
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-green-400">
                    <h2 class="text-2xl font-semibold mb-2">Brendan York</h2>
                    <p class="text-lg">Business / Market Research</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-pink-400">
                    <h2 class="text-2xl font-semibold mb-2">Mehboob Ahmad</h2>
                    <p class="text-lg">Backend Developer</p>
                </div>
            </div>
        </div>

        <!-- Third Row -->
        <div class="flex flex-wrap -m-4">
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-purple-400">
                    <h2 class="text-2xl font-semibold mb-2">Gul Hassan</h2>
                    <p class="text-lg">UI Designer</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
                <div class="w-full p-6 border rounded-lg shadow-lg bg-cyan-400">
                    <h2 class="text-2xl font-semibold mb-2">Tabinda Noor</h2>
                    <p class="text-lg">Frontend Developer</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            team: [
                {
                    name: 'Alice Smith',
                    role: 'CEO',
                    bio: 'Passionate about leadership and innovation. Loves to travel and explore new cultures.',
                    avatar: '/alice.jpg'
                },
                {
                    name: 'Bob Johnson',
                    role: 'CTO',
                    bio: 'Enthusiastic technologist. Enjoys building robots in his spare time.',
                    avatar: '/bob.jpg'
                },
                {
                    name: 'Emily Brown',
                    role: 'Designer',
                    bio: 'Creative mind with a passion for art. Enjoys painting and sketching in her free time.',
                    avatar: '/emily.jpg'
                },
                {
                    name: 'Alex Lee',
                    role: 'Developer',
                    bio: 'Coding ninja with a love for open source. Enjoys contributing to community projects.',
                    avatar: '/alex.jpg'
                }
            ]
        };
    }
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
