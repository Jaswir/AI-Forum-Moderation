<template>
    <div class="bg-white p-8">
        <h2 class="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div class="flex justify-center space-x-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[300px]" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Starter</h3>
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
                <div class="items-center p-6 flex justify-center">
                    <button
                        class="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full  bg-[#0A065D] hover:bg-[#241e89]">
                        Get Started
                    </button>
                </div>
            </div>
            <div class="rounded-lg text-card-foreground shadow-sm w-[300px] bg-[#F8F1F1] border-2 border-[#A3816A]"
                data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Premium</h3>
                    <p class="text-sm text-muted-foreground">$9.99 / month</p>
                  
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
                <div class="items-center p-6 flex justify-center">
                    <button
                        class="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full  bg-[#0A065D] hover:bg-[#241e89]">
                        Get Started
                    </button>
                </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[300px]" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Enterprise</h3>
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
                <div class="items-center p-6 flex justify-center">
                    <button
                        class="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-[#0A065D] hover:bg-[#241e89]">
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