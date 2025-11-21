<script lang="ts">
	import { goto } from '$app/navigation';
	import GuiShell from '$lib/components/gui/GuiShell.svelte';
	import StatusBar from '$lib/components/terminal/StatusBar.svelte';

	function handleSwitchToTerminal() {
		goto('/');
	}

	function handleModeSwitch(mode: 'terminal' | 'gui') {
		if (mode === 'terminal') {
			goto('/');
		}
	}
</script>

<div class="w-full h-screen dark flex flex-col overflow-hidden">
	<!-- Status Bar at the very top -->
	<StatusBar isProcessing={false} currentMode="gui" onModeSwitch={handleModeSwitch} />
	
	<GuiShell onSwitchToTerminal={handleSwitchToTerminal} />
</div>