#pragma once

#include <Crymium/Core/ICrymiumContainer.h>

struct SGamePluginEnv
{
	ICrymiumContainer* pCrymiumContainer = nullptr;
};

extern SGamePluginEnv* gGamePluginEnv;
