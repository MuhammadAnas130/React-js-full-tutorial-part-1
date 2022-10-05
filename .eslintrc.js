{
	("env");
	{
		("browser");
		true, "es2021";
		true, "jest";
		true;
	}
	("extends");
	["eslint:recommended", "plugin:react/recommended"], "overrides";
	[], "parserOptions";
	{
		("ecmaVersion");
		("latest");
	}
	("extends");
	[
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	];

	("plugins");
	["react"], "rules";
	{
		("react/react-in-jsx-scope");
		("off");
	}
}
