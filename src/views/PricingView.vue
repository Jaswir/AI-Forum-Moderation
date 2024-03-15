<template>
<div class="bg-white p-8">
    <h2 class="text-3xl font-bold text-center mb-8">Pricing</h2>
    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-[300px]" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold">Starter</h3>
                <p class="text-sm text-muted-foreground">Supported by ads</p>
            </div>
            <div class="p-6">
                <ul class="list-disc space-y-2 pl-5">
                    <li>Identify foods</li>
                    <li>Estimate calories</li>
                    <li>View basic nutritional info</li>
                    <li>Receive limited recipe suggestions</li>
                </ul>
            </div>
            <div class="flex justify-center p-6">
                <button class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
                    Get Started
                </button>
            </div>
        </div>

        <div class="rounded-lg border bg-[#F8F1F1] text-card-foreground shadow-sm w-full md:w-[300px]" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold">Premium</h3>
                <p class="text-sm">$9.99 / month</p>
            </div>
            <div class="p-6">
                <ul class="list-disc space-y-2 pl-5">
                    <li>Personalized dietary recommendations</li>
                    <li>Fitness tracker integration</li>
                    <li>Ad-free experience</li>
                    <li>Priority support</li>
                    <li>Advanced nutritional analysis</li>
                </ul>
            </div>
            <div class="flex justify-center p-6">
                <button class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
                    Get Started
                </button>
            </div>
        </div>

        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-[300px]" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold">Enterprise</h3>
                <p class="text-sm text-muted-foreground">Custom pricing</p>
            </div>
            <div class="p-6">
                <ul class="list-disc space-y-2 pl-5">
                    <li>API access</li>
                    <li>Customizable solutions</li>
                    <li>Enhanced analytics</li>
                    <li>Scalable infrastructure</li>
                    <li>Dedicated account manager</li>
                </ul>
            </div>
            <div class="flex justify-center p-6">
                <button class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    methods: {
        submitForm() {
            // Your form submission logic here
        }
    }
}
</script>