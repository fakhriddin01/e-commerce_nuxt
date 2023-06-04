<template>
    <div class="flex text-white justify-center items-center gap-2">
        <div class="bg-[#606060] w-[45px] h-[50px] flex flex-col items-center justify-center rounded-md">
            <p class="font-[700]">{{ days }}</p>
            <p class="text-[12px]">Days</p>
        </div>
        <div class="bg-[#606060] w-[45px] h-[50px] flex flex-col items-center justify-center rounded-md">
            <p class="font-[700]">{{ hours }}</p>
            <p class="text-[12px]">Hours</p>
        </div>
        <div class="bg-[#606060] w-[45px] h-[50px] flex flex-col items-center justify-center rounded-md">
            <p class="font-[700]">{{ minutes }}</p>
            <p class="text-[12px]">Min</p>
        </div>
        <div class="bg-[#606060] w-[45px] h-[50px] flex flex-col items-center justify-center rounded-md">
            <p class="font-[700]">{{ seconds }}</p>
            <p class="text-[12px]">Sec</p>
        </div>
    </div>
</template>

<script setup>
    const dayjs = useDayjs()

    const days = ref('');
    const hours = ref('');
    const minutes = ref('');
    const seconds = ref('');

    onMounted(() => {
      startCountdown(days, hours, minutes, seconds);
    });

    const startCountdown = (daysRef, hoursRef, minutesRef, secondsRef) => {
      const targetDate = dayjs('2023-06-15 14:00:00'); // Replace with your target date

      const updateCountdown = () => {
        const currentDate = dayjs();
        const diff = targetDate.diff(currentDate);

        if (diff <= 0) {
          daysRef.value = '00';
          hoursRef.value = '00';
          minutesRef.value = '00';
          secondsRef.value = '00';
        } else {
            const totalSeconds = Math.floor(diff / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);

            secondsRef.value = String(totalSeconds % 60).padStart(2, '0');
            minutesRef.value = String(totalMinutes % 60).padStart(2, '0');
            hoursRef.value = String(totalHours % 24).padStart(2, '0');
            daysRef.value = String(totalDays).padStart(2, '0');
            }
      };

      // Update countdown every second
      setInterval(updateCountdown, 1000);
    };
    
    // // dayjs.extend(relativeTime)
    // const target = dayjs('2023/06/06 14:00')
    // console.log(dayjs().to(target));
    

</script>

<style scoped>

</style>