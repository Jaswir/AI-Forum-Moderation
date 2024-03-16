<template>
    <div class="bg-white p-8">
        <h2 class="text-3xl font-bold text-center mb-8">Mod GuardAIn Pricing Plans</h2>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-[300px]" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold">Basic</h3>
                    <p class="text-sm text-muted-foreground">Community-supported</p>
                </div>
                <div class="p-6">
                    <ul class="list-disc space-y-2 pl-5">
                        <li>Automated content moderation</li>
                        <li>Basic sentiment analysis</li>
                        <li>Standard support</li>
                        <li>Community guidelines enforcement</li>
                    </ul>
                </div>
                <div class="flex justify-center p-6">
                    <button
                        class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
                        Get Started
                    </button>
                </div>
            </div>

            <div class="rounded-lg border bg-[#F8F1F1] text-card-foreground shadow-sm w-full md:w-[300px]"
                data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold">Professional</h3>
                    <p class="text-sm">$29.99 / month</p>
                </div>
                <div class="p-6">
                    <ul class="list-disc space-y-2 pl-5">
                        <li>Advanced sentiment analysis</li>
                        <li>Custom moderation rules</li>
                        <li>Priority support</li>
                        <li> Expanded filtering capacity with no limits on the volume of content.
                        </li>
                        <li>Advanced language detection capabilities to identify and remove toxic individuals.</li>
                        <li>Enhanced analytics and reporting</li>
                    </ul>
                </div>
                <div class="flex justify-center p-6">
                    <button
                        class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
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
                        <li>Full API access for integration</li>
                        <li>Custom AI models tailored to your needs</li>
                        <li>Scalable infrastructure for large communities</li>
                        <li>Dedicated account manager and technical support</li>
                    </ul>
                </div>
                <div class="flex justify-center p-6">
                    <button
                        class="bg-[#0A065D] hover:bg-[#241e89] text-white rounded-md text-sm font-medium h-10 px-4 py-2 w-full transition-colors">
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